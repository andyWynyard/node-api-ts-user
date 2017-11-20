import { Router, Request, Response, NextFunction } from 'express';
import User from '../models/User';

class UserRouter {
  router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }
  public GetUsers(req: Request, res: Response): void {
    User.find({})
      .then(data => {
        const status = res.statusCode;
        const tempData = data.filter(val => val.active);
        data = tempData;

        res.json({
          status,
          data
        });
      })
      .catch(err => {
        const status = res.statusCode;
        res.json({
          status,
          err
        });
      });
  }
  public GetUser(req: Request, res: Response): void {
    const username: string = req.params.username;

    User.findOne({ username })
      .then(data => {
        const status = res.statusCode;
        if (data.active) {
          res.json({
            status,
            data
          });
        } else {
          res.json({
            status: 403,
            data: []
          });
        }
      })
      .catch(err => {
        const status = res.statusCode;
        res.json({
          status,
          err
        });
      });
  }
  public CreateUser(req: Request, res: Response): void {
    const fName: string = req.body.fName;
    const lName: string = req.body.lName;
    const username: string = req.body.username;
    const email: string = req.body.email;
    const nationality: string = req.body.nationality;
    const phone: number = req.body.phone;
    const primaryAddress: string = req.body.primaryAddress;
    const deliveryAddress: string = req.body.deliveryAddress;
    const postalCode: string = req.body.postalCode;
    const city: string = req.body.city;
    const country: string = req.body.country;
    const password: string = req.body.password;

    const user = new User({
      fName,
      lName,
      username,
      email,
      nationality,
      phone,
      primaryAddress,
      deliveryAddress,
      postalCode,
      city,
      country,
      password
    });

    user
      .save()
      .then(data => {
        const status = res.statusCode;
        res.json({
          status,
          data
        });
      })
      .catch(err => {
        const status = res.statusCode;
        res.json({
          status,
          err
        });
      });
  }

  public UpdateUser(req: Request, res: Response): void {
    const username: string = req.params.username;

    // console.log(`Params: ${req.params.username}`);
    // console.log(`Body: ${req.body.active}`);

    User.findOneAndUpdate({ username }, req.body)

      .then(data => {
        const status = res.statusCode;
        res.json({
          status,
          data
        });
      })
      .catch(err => {
        const status = res.statusCode;
        res.json({
          status,
          err
        });
      });
  }

  public DeleteUser(req: Request, res: Response): void {
    const username: string = req.params.username;

    req.body = { active: false };

    User.findOneAndUpdate({ username }, req.body)
      .then(data => {
        const status = res.statusCode;
        res.json({
          status,
          data
        });
      })
      .catch(err => {
        const status = res.statusCode;
        res.json({
          status,
          err
        });
      });
  }

  routes() {
    this.router.get('/', this.GetUsers);
    this.router.get('/:username', this.GetUser);
    this.router.post('/', this.CreateUser);
    this.router.put('/:username', this.UpdateUser);
    this.router.delete('/:username', this.DeleteUser);
  }
}

// export
const userRoutes = new UserRouter();
userRoutes.routes();

export default userRoutes.router;
