import { Link, useNavigate } from "react-router-dom";
import { LoginImg, logo } from "../../../assets/images/images";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { registerUser } from "../../../Reducer/AuthSlice";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { confirmPassword, ...userData } = data;
    console.log("password: ", password);
    dispatch(registerUser({ ...userData, mobile: null })).then((res) => {
      if (res?.payload?.status_code === 201) {
        navigate("/");
      }
    });
  };

  const password = watch("password");

  return (
    <div className="my-0 lg:my-0 mx-4 lg:mx-0 flex justify-center items-center">
      <div className="w-full my-0 mx-auto">
        <div className="flex h-screen">
          <div
            className="w-6/12 bg-cover"
            style={{ backgroundImage: `url("${LoginImg}")` }}
          >
            &nbsp;
          </div>
          <div className="w-6/12 flex justify-center items-center">
            <div className="w-8/12">
              {/* <div className="text-center mb-8">
              <img className="inline-block" src={logo} />
            </div> */}
              <h1 className="text-[80px] leading-[80px] text-[#009BF2] pb-3 text-center">
                Welcome
              </h1>
              <p className="text-[#393939] text-3xl text-center pb-10">
                Please enter you details to continue
              </p>
              <div className="login_area">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-6">
                    <div className="flex gap-4">
                      <input
                        type="text"
                        className="bg-white border border-[#009BF2] text-[#888888] text-base rounded-xl focus:ring-[#009BF2] focus:border-[#009BF2] block w-full py-4 px-3"
                        placeholder="First Name"
                        {...register("first_name", { required: true })}
                      />
                      <input
                        type="text"
                        className="bg-white border border-[#009BF2] text-[#888888] text-base rounded-xl focus:ring-[#009BF2] focus:border-[#009BF2] block w-full py-4 px-3"
                        placeholder="Last Name"
                        {...register("last_name", { required: true })}
                      />
                    </div>
                    {errors.firstName && <span>First Name is required</span>}
                    {errors.lastName && <span>Last Name is required</span>}
                  </div>

                  <div className="mb-6">
                    <input
                      type="email"
                      id="email"
                      className="bg-white border border-[#009BF2] text-[#888888] text-base rounded-xl focus:ring-[#009BF2] focus:border-[#009BF2] block w-full py-4 px-3"
                      placeholder="Enter your email address"
                      {...register("email", { required: true })}
                    />
                    {errors.email && <span>Email is required</span>}
                  </div>

                  <div className="mb-6">
                    <div className="flex justify-between">
                      <div className="block md:hidden">
                        <Link
                          className="text-base md:text-xl text-teal-400 font-bold hover:text-teal-500"
                          to="/forgot-password"
                        >
                          Forgot Password?
                        </Link>
                      </div>
                    </div>
                    <input
                      placeholder="Enter Password"
                      type="password"
                      id="password"
                      className="bg-white border border-[#009BF2] text-[#888888] text-base rounded-xl focus:ring-[#009BF2] focus:border-[#009BF2] block w-full py-4 px-3"
                      {...register("password", { required: true })}
                    />
                    {errors.password && <span>Password is required</span>}
                  </div>
                  <div className="mb-6">
                    <input
                      placeholder="Confirm Password"
                      type="password"
                      id="password"
                      className="bg-white border border-[#009BF2] text-[#888888] text-base rounded-xl focus:ring-[#009BF2] focus:border-[#009BF2] block w-full py-4 px-3"
                      {...register("confirmPassword", {
                        required: true,
                        validate: (value) =>
                          value === password || "Passwords do not match",
                      })}
                    />
                    {errors.confirmPassword && (
                      <span>{errors.confirmPassword.message}</span>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="text-white bg-[#009BF2] font-Manrope font-extrabold text-[23px] mb-2 hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-xl text-xl w-full px-5 py-3.5 text-center"
                  >
                    Sign Up
                  </button>
                  <div className="mb-2">
                    <div className="flex justify-center items-center">
                      <p className="text-[18px] text-center">
                        Already have an account?{" "}
                        <Link
                          to="/"
                          className="text-[#009BF2] hover:text-black"
                        >
                          Log In?
                        </Link>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
