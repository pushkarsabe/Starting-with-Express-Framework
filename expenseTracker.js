const Expense = require('../models/expense');

//to post the records to database
exports.postAddExpense = async (req, res, next) => {
    try {
        if (!req.body.amount) {
            throw new Error('Please add a amount')
        }
        const amount = req.body.amount;
        const description = req.body.description;
        const option = req.body.option;
        console.log('amount = ' + amount);
        console.log('description = ' + description);
        console.log('option = ' + option);

        const newExpense = await Expense.create({
            amount: amount,
            description: description,
            option: option,
        });
        //will send json response back to the client
        res.status(201).json({ newExpenseDetails: newExpense });
    }
    catch (err) {
        res.status(500).json({
            error: err,
        })
    }
}

exports.getAllExpense = async (req, res, next) => {
    try {
        const expenseData = await Expense.findAll();
        console.log('expenseData = ' + expenseData);
        res.status(200).json({ ExpenseData: expenseData });
    }
    catch (err) {
        console.log('Get expense is failing' + JSON.stringify(err));
        res.status(500).json({ error: err });
    }
}


exports.deleteExpense = async (req, res, next) => {
    try {
        if (req.params.id === undefined || req.params.id === "") {
            res.status(400).json({ err: 'ID is missing' });
        }
        const expenseId = req.params.id;
        console.log('expenseId = ' + expenseId);
        await Expense.destroy({ where: { id: expenseId } });
        res.sendStatus(200);
    }
    catch (err) {
        console.log('Delete expense` is failing' + JSON.stringify(err));
        res.status(500).json({ error: err });
    }
}

exports.getOneExpense = async (req, res, next) => {
    try {
        const paricularExpenseId = req.params.id;
        console.log('paricularExpenseId = ' + paricularExpenseId);
        const particularExpenseData = await Expense.findAll({ where: { id: paricularExpenseId } });
        console.log('particularExpenseData = ' + particularExpenseData);
        res.status(200).json({ particularData: particularExpenseData });
    }
    catch (err) {
        console.log('Get expense is failing' + JSON.stringify(err));
        res.status(500).json({ error: err });
    }
}

