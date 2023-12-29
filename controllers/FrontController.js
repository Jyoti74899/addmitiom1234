const UserModel = require("../models/User")

class FrontController {

    static login = async (req, res) => {
        try {
            res.render("login", { msg: req.flash('success') })
        } catch (error) {
            console.log(error)
        }
    }
    static register = async (req, res) => {
        try {
            res.render("register", { msg: req.flash("error") })
        } catch (error) {
            console.log(error)
        }
    }
    static about = async (req, res) => {
        try {
            res.render("about")
        } catch (error) {
            console.log(error)
        }
    }
    static contact = async (req, res) => {
        try {
            res.render("contact")
        } catch (error) {
            console.log(error)
        }
    }
    static home = async (req, res) => {
        try {
            res.render("home")
        } catch (error) {
            console.log(error)
        }
    }
    //data insert reg
    static insertReg = async (req, res) => {
        try {
            //consol.log("insert data")
            //console.log(req.body)
            const { n, e, p, cp } = req.body
            const user = await UserModel.findOne({ email: e })

            //console.log(user)
            if (user) {
                req.flash("error", "Email already exit")
                res.redirect("/register")
            } else {
                if (n && e && p && cp) {
                    if (p == cp) {

                        const result = new UserModel({
                            name: n,
                            email: e,
                            password: p,
                        })
                        await result.save()
                        req.flash("success", "Register success PlZ Login!")
                        res.redirect("/")//route url 


                    } else {
                        req.flash("error", "password and cpassword Not Same")
                        res.redirect("/register")
                    }
                } else {
                    req.flash("error", "All Field req")
                    res.redirect("/register")
                }
            }

        } catch (error) {
            console.log(error)
        }
    }

}


module.exports = FrontController