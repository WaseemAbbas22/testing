import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';

const ContactUSForm = () => {
    return (
        <div className="flex flex-col md:flex-row w-full min-h-screen bg-gray-50">
            {/* Right Side Form */}
            <div className="md:w-full w-full bg-white mt-10 flex items-left justify-left">
                <form className="w-full border border-[#D6D6D6] rounded-lg max-w-md space-y-3">
                    <div className="w-[90%] justify-center items-center ml-6 mt-4">
                        <div className="items-center justify-center space-y-2 ">
                            <label className="text-xs text-bold mb-6">First Name</label>
                            <input
                                type="text"
                                placeholder="First Name"
                                className="custom-form h-10 bg-bggray "
                                required
                            />


                            <div>
                                <label className="text-gray text-xs text-bold mb-6">Last Name</label>
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    className="custom-form h-10 bg-bggray"
                                    required
                                />
                            </div>

                            <label className="text-gray text-xs mb-6">Phone Number</label>
                            <PhoneInput
                                country={'pk'} // default country
                                inputStyle={{ width: "100%", backgroundColor: "#F5F5F5" }}
                            />



                            <div>
                                <label className="text-gray text-xs mb-6">E-mail</label>
                                <input
                                    placeholder="E-mail"
                                    className="custom-form h-10 bg-bggray"
                                    required
                                />
                            </div >

                            <div  className="text-gray text-xs "> Select Pest Concern
                                <select className="w-full h-10 mt-1.5 custom-form bg-bggray text-gray-400">
                                    <option value="">Select---</option>
                                    <option value="pk">Pakistan</option>
                                    <option value="in">India</option>
                                    <option value="us">USA</option>
                                </select>
                            </div>

                            <div  className="text-gray text-xs"> Select Pest Concern
                                <select className="w-full h-10 mt-1.5 custom-form bg-bggray text-gray">
                                    <option value="">Select---</option>
                                    <option value="pk">Pakistan</option>
                                    <option value="in">India</option>
                                    <option value="us">USA</option>
                                </select>
                            </div>
                            <div>
                                <label className="text-gray text-xs mb-6">Message</label>
                                <textarea
                                    placeholder="Message"
                                    className="custom-form h-20 bg-bggray"
                                    required
                                />
                            </div >



                        </div>
                        <button
                            type="submit"
                            className="bg-green-600 text-white px-4 mb-6 mt-4 py-2 text-xs rounded hover:bg-green-700 transition items-center justify-center"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default ContactUSForm;
