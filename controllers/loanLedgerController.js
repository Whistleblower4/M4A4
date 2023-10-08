const LoanLedger = require('../model/loanLedgerModel');
const APIFeatures = require('../dataBaseManager/loanDbContext');

exports.getAllLoanLedger =   async (req, res) => { //creating api to fetch all loans data
  try {
    // EXECUTE QUERY
    const features = new APIFeatures(LoanLedger.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const loanLedger = await features.query;

    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: loanLedger.length,
      data: {
        loanLedger
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.getLoanLedger = async (req, res) => { //creating api to get id specific loan
  try {
    const loanLedger = await LoanLedger.findById(req.params.id);
    // Course.findOne({ _id: req.params.id })

    res.status(200).json({
      status: 'success',
      data: {
        loanLedger
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.createLoanLedger = async  (req, res) => { //API creation to create a new loan document
  try {
    const newLoan = await LoanLedger.create(req.body);

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

exports.updateLoanLedger = async (req, res) => { //creating api to update exisiting data
  try {
    const loanLedger = await LoanLedger.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      status: 'success',
      data: {
        loanLedger
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.deleteLoanLedger = async (req, res) => { // delete any specific data
  try {
    await LoanLedger.findByIdAndDelete(req.params.id);

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