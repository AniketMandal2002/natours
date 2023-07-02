
const Tour = require('./../models/tourModel');

// const tours = JSON.parse(fs.readFileSync(`${__dirname}/../data/tours.json`));


// exports.checkID = (req,res,next,val)=>{
//   if (req.params.id * 1 > tours.length) {
//     return res.status(404).json({
//       status: "fail",
//       message: "Invalid ID",
//     });
//   }
//   next();
// }

// exports.checkBody = (req,res,next)=>{

//   if(!req.body.name || !req.body.cost){
//     return res.status(400).json({
//       status:'fail',
//       message:'Missing name or price'
//     })
//   }
//   next();
// }

exports.getAllTours = (req, res) => {
  console.log(req.requestTime);
  res.status(200).json({
    status: "success",
    requestedAT: req.requestTime,
    // results: tours.length,
    // data: {
    //   tours,
    // },
  });
};

exports.getTour = (req, res) => {
  console.log(req.params);
  const id = req.params.id * 1;

  // const tour = tours.find((el) => el.id === id);

  
  // res.status(200).json({
  //   status: "success",
  //   data: {
  //     tour,
  //   },
  // });
};

exports.createTour = async (req, res) => {

  try{

  

  // const newTour = new Tour({

  // })
  // newTour.save();

const newTour = await Tour.create(req.body);

  // const newID = tours[tours.length - 1].id + 1;
  // const newTour = Object.assign({ id: newID }, req.body);

  // tours.push(newTour);

  // fs.writeFile(
  //   `${__dirname}/data/tours-simple.json`,
  //   JSON.stringify(tours),
  //   (err) => {
      res.status(201).json({
        status: "success",
        data: {
          tour: newTour,
        },
      });
    } catch(err){
      res.status(400).json({
        status: 'fail',
        message: err
      })
    }
    }
  

exports.updateTour = (req, res) => {
  
  res.status(200).json({
    status: "success",
    data: {
      tour: "<Updated tour here...>",
    },
  });
};

exports.deleteTour = (req, res) => {
  
  res.status(204).json({
    status: "success",
    data: null,
  });
};
