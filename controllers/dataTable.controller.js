const DataTable = require('../models/dataTable.model');

// Create new data table for a new node
exports.createNewDataTable = (req, res) => {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({
      state: false,
      message: 'Content can not be empty!'
    });
  } else {
    DataTable.createNewDataTable(req.body.nodeId, req.body.columns, (err, data) => {
      if (err) {
        res.status(500).json({
          state: false,
          message: err.message || 'Some error occurred while creating the data table.'
        });
      } else 
        res.status(200).json({
          state: true,
          table_data: data
        });
    });
  }
};

// Add columns by table name
exports.addColumnToTableByTableName = (req, res) => {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({
      state: false,
      message: 'Content can not be empty!'
    });
  } else {
    DataTable.addColumnToTableByTableName(req.params.tableName, req.body.columns, (err, data) => {
      if (err) {
        res.status(500).json({
          state: false,
          message: err.message || 'Some error occurred while updating the data table.'
        });
      } else 
        res.status(200).json({
          state: true,
          table_data: data
        });
    });
  }
};

// Modify columns by table name
exports.modifyColumnByTableName = (req, res) => {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({
      state: false,
      message: 'Content can not be empty!'
    });
  } else {
    DataTable.modifyColumnByTableName(req.params.tableName, req.body.columns, (err, data) => {
      if (err) {
        res.status(500).json({
          state: false,
          message: err.message || 'Some error occurred while updating the data table.'
        });
      } else 
        res.status(200).json({
          state: true,
          table_data: data
        });
    });
  }
};

// Drop columns by table name
exports.dropColumnByTableName = (req, res) => {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({
      state: false,
      message: 'Content can not be empty!'
    });
  } else {
    DataTable.dropColumnByTableName(req.params.tableName, req.body.columns, (err, data) => {
      if (err) {
        res.status(500).json({
          state: false,
          message: err.message || 'Some error occurred while updating the data table.'
        });
      } else 
        res.status(200).json({
          state: true,
          table_data: data
        });
    });
  }
};

// Rename columns by table name
exports.renameColumnByTableName = (req, res) => {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({
      state: false,
      message: 'Content can not be empty!'
    });
  } else {
    DataTable.renameColumnByTableName(req.params.tableName, req.body.columns, (err, data) => {
      if (err) {
        res.status(500).json({
          state: false,
          message: err.message || 'Some error occurred while updating the data table.'
        });
      } else 
        res.status(200).json({
          state: true,
          table_data: data
        });
    });
  }
};

// Get all data table names
exports.getAllDataTableNames = (req, res) => {
  DataTable.getAllDataTables((err, data) => {
    if (err) {
      res.status(500).json({
        state: false,
        message: err.message || 'Some error occurred while getting data table names.'
      });
    } else 
      res.status(200).json({
        state: true,
        table_names: data
      });
  })
}