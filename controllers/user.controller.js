const { getOldData, postAData } = require('../utils/dataCollectAndPost');

const data = getOldData()

module.exports.getRandomData = (req, res) => {
    const randomNumber = Math.ceil(Math.random() * data.length)
    const randomUser = data.filter(d => d.id === randomNumber)
    res.send(randomUser)
}

module.exports.getAllUser = (req, res) => {
    const q = req.query.limit;

    if (q > user.length) {
        return res.send(user);
    }

    if (q) {
        return res.send(user.slice(0, q));
    }
    res.send(data)
}

module.exports.postAData = (req, res) => {
    const { gender, name, contact, address, photoUrl } = req.body;
    const newId = data.length + 1;

    if (!gender || !name || !contact || !address || !photoUrl) {
        res.status(404).send('Please Provide All data')
    }

    const newData = { id: newId, ...req.body }
    const finalData = [...data, newData]

    postAData(finalData)
    res.send(finalData)
}

module.exports.deleteAData = (req, res) => {
    const { id } = req.params;

    const findForDelete = data.find(d => d.id === Number(id))

    if (!findForDelete) {
        res.status(404).send("Id NOT found")
    } else {
        const filterItem = data.filter(d => d.id !== findForDelete.id)
        postAData(filterItem)
        res.send('Delete Successfully')
    }

}

module.exports.patchSingle = (req, res) => {
    const { id } = req.params;
    const { name, gender, contact, address, photoUrl } = req.body;

    const foundUser = data.find((user) => user.id === Number(id));
    if (!foundUser) {
        return res.send(`user with id ${id} does not exist`);
    }

    const updatedUsers = data.map((u) => {
        if (u.id === Number(id)) {
            if (name || gender || contact || address || photoUrl) {
                return {
                    id: u.id,
                    name: name || u.name,
                    gender: gender || u.gender,
                    contact: contact || u.contact,
                    address: address || u.address,
                    photoUrl: photoUrl || u.photoUrl,
                };
            }
        } else {
            return u;
        }
    });

    postAData(updatedUsers);
    res.send(`user with id ${id} has been updated`);
};

module.exports.bulkUpdate = (req, res) => {
    const ids = req.body;
    const key = 'id';
    const updatedBulkUsers = data.map((user) => {
        const foundUser = ids.find((i) => i[key] === user[key]);

        if (foundUser) {
            user = Object.assign(user, foundUser);
        }
        return user;
    });

    utilFunction.saveUserData(updatedBulkUsers);
    res.send(`Bulk Update successfull`);
};