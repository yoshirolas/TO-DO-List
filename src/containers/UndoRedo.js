import React from 'react';
import { ActionCreators as UndoActionCreators } from 'redux-undo';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';

let UndoRedo = ({ canUndo, canRedo, onUndo, onRedo }) => (

  <div>
    <RaisedButton 
      label="Undo"
      type='submit'
      onClick={onUndo}
      disabled={!canUndo} 
    />
    <RaisedButton 
      label="Redo"
      type='submit'
      onClick={onRedo}
      disabled={!canRedo}
    />
  </div>
)

const mapStateToProps = (state) => ({
  canUndo: state.changeCategoryTree.past.length > 0,
  canRedo: state.changeCategoryTree.future.length > 0
})

const mapDispatchToProps = ({
  onUndo: UndoActionCreators.undo,
  onRedo: UndoActionCreators.redo
})

UndoRedo = connect(
  mapStateToProps,
  mapDispatchToProps
)(UndoRedo)

export default UndoRedo
