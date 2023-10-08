const Customer = require('../model/customerModel');
const APIFeatures = require('../dataBaseManager/loanDbContext');

exports.getAllCustomer =   async (req, res) => { //creating api to fetch all Customers data
  try {
    // EXECUTE QUERY
    const features = new APIFeatures(Customer.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const customer = await features.query;

    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: customerustomer.length,
      data: {
        customer
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.getCustomer = async (req, res) => { //creating api to get id specific Customer
  try {
    const customer = await Customer.findById(req.params.id);
    // Course.findOne({ _id: req.params.id })

    res.status(200).json({
      status: 'success',
      data: {
        customer
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.createCustomer = async  (req, res) => { //API creation to create a new Customer document
  try {
    const newCustomer = await Customer.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        course: newCustomer
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};

exports.updateCustomer = async (req, res) => { //creating api to update exisiting data
  try {
    const customer = await Customer.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      status: 'success',
      data: {
        customer
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.deleteCustomer = async (req, res) => { // delete any specific data
  try {
    await Customer.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'success',
      data: null
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};