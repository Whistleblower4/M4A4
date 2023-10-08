const Loan = require('../model/loanModel');
const APIFeatures = require('../dataBaseManager/loanDbContext');

exports.getAllLoan =   async (req, res) => { //creating api to fetch all loans data
  try {
    // EXECUTE QUERY
    const features = new APIFeatures(Loan.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const loan = await features.query;

    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: loan.length,
      data: {
        loan
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.getLoan = async (req, res) => { //creating api to get id specific loan
  try {
    const loan = await Loan.findById(req.params.id);
    // Course.findOne({ _id: req.params.id })

    res.status(200).json({
      status: 'success',
      data: {
        loan
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.createLoan = async  (req, res) => { //API creation to create a new loan document
  try {
    const newLoan = await Loan.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        course: newLoan
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};

exports.updateLoan = async (req, res) => { //creating api to update exisiting data
  try {
    const loan = await Loan.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      status: 'success',
      data: {
        loan
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.deleteLoan = async (req, res) => { // delete any specific data
  try {
    await Loan.findByIdAndDelete(req.params.id);

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