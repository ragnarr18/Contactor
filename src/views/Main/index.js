import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import BoardsList from '../../components/BoardsList';
import BoardsToolbar from '../../components/BoardsToolbar';
import data from '../../resources/data.json';
import AddBoard from '../../components/AddBoard';
import EditBoard from '../../components/EditBoard';
import deleteBoards from '../../services/deleteBoards';

class Boards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAddModalOpen: false, isEditModalOpen: false, selectedItems: [], currentName: '', currentThumbnail: '',
    };
  }

  getNameAndThumbnail(id) {
    let board = null;
    for (let i = 0; i < data.boards.length; i += 1) {
      if (data.boards[i].id === id) {
        board = data.boards[i];
        this.setState({ currentName: board.name, currentThumbnail: board.thumbnailPhoto });
        break;
      }
    }
  }

  selectOrUnSelect(id) {
    const { selectedItems } = this.state;
    const index = selectedItems.indexOf(id);
    if (index === -1) {
      selectedItems.push(id);
      this.getNameAndThumbnail(id);
      return;
    }
    selectedItems.splice(index, 1);
  }

  deleteSelected() {
    const { selectedItems } = this.state;
    deleteBoards(selectedItems);
    this.setState({ selectedItems: [] });
  }

  render() {
    const {
      isAddModalOpen, isEditModalOpen, currentName, currentThumbnail, selectedItems,
    } = this.state;
    const { navigation } = this.props;
    return (
      <View>
        <BoardsList
          boardsItems={data.boards}
          navigation={navigation}
          setSelected={(id) => this.selectOrUnSelect(id)}
        />
        <BoardsToolbar
          onAdd={() => this.setState({ isAddModalOpen: true, selectedItems })}
          onDelete={() => this.deleteSelected()}
          onEdit={() => this.setState({ isEditModalOpen: true, selectedItems })}
        />
        <AddBoard
          isOpen={isAddModalOpen}
          closeModel={() => this.setState({ isAddModalOpen: false })}
        />
        {selectedItems.length === 1
        && (
        // this.getNameAndThumbnail(selectedItems[0]),
        <EditBoard
          isOpen={isEditModalOpen}
          closeModel={() => this.setState({ isEditModalOpen: false })}
          id={selectedItems[0]}
          prevName={currentName}
          prevThumbnail={currentThumbnail}
        />
        )}
      </View>
    );
  }
}
Boards.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Boards;
