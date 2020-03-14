siswaModel = require('./siswaModel');

// home/tampilkan
exports.index = function(req,res){
    siswaModel.get(function (err, siswa) {
        if(err){
            res.json({
                status: "error",
                pesan: err
            });
        }
        res.json({
            status: "sukses",
            pesan: "Menampilkan data siswa",
            data: siswa
        });
    });
};

// input baru
exports.new = function(req,res){
    let siswa = new siswaModel();
    siswa.nama = req.query.nama ? req.query.nama : siswa.nama;
    siswa.tanggallahir = req.query.tanggallahir;
    siswa.jeniskelamin = req.query.jeniskelamin;
    siswa.hobi = req.query.hobi;

    //save
    siswa.save(function(err){
        if(err)
        res.json(err);
        res.json({
            pesan: "Siswa sudah ditambah",
            data: siswa
        });
    });
};

// cari info
exports.view = function(req,res){
    siswaModel.findById(req.params.siswa_id, function (err, siswa) {
        if(err)
        res.send(err);
        res.json({
            pesan: "Data siswa sudah di loading ...",
            data: siswa
        });
    });
};

//update data
exports.put = function(req,res){
    siswaModel.findById(req.params.siswa_id, function (err,siswa){
        if(err)
        res.send(err);

        siswa.nama = req.query.nama ? req.query.nama : siswa.nama;
        siswa.tanggallahir = req.query.tanggallahir;
        siswa.jeniskelamin = req.query.jeniskelamin;
        siswa.hobi = req.query.hobi;

        //save
        siswa.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                pesan: "Siswa sudah diupdate",
                data: siswa
            });
        }); 
    });
};

// hapus data
exports.delete = function(req,res){
    siswaModel.deleteOne({
        _id: req.params.siswa_id
    }, function(err,siswa){
        if(err)
        res.send(err);

        res.json({
            status: "Sukses",
            pesan: "Data Siswa dihapus"
        });
    });
};