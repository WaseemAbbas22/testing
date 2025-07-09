const JobForm = () => {
    return (
        <div className="flex flex-col md:flex-row w-full min-h-screen bg-gray-50">
            {/* Right Side Form */}
            <div className="md:w-[40%] w-full bg-white p-4 mt-12 flex items-center justify-center">
                <form className="w-[100%] border border-darkgreen rounded max-w-md">
                    <div className="w-[90%] justify-center items-center ml-6 mt-4">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Apply for this position</h3>

                        <div className="items-center justify-center  ">
                            <label className="text-xs mb-6">Full Name</label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="custom-form "
                                required
                            />


                            <div>
                                <label className="text-gray text-xs mb-6">Email</label>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="custom-form"
                                    required
                                />
                            </div>

                            <div>
                                <label className="text-gray text-xs mb-6">Phone Number</label>
                                <input
                                    type="tel"
                                    placeholder="Your Phone Number"
                                    className="custom-form"
                                    required
                                />
                            </div>



                            <div>
                                <label className="text-gray text-xs mb-6">Cover Letter</label>
                                <textarea
                                    placeholder="Write your cover letter here..."
                                    className="custom-form"
                                    rows="4"
                                ></textarea>
                            </div>
                            <div>
                                <label className="text-gray text-xs mb-6">Upload CV/Resume</label>
                                <input
                                    type="file"
                                    className="custom-form px-0 border-none"
                                />
                                <p className="text-xs text-gray mb-1">Allowed Type (s): .pdf, .doc, .docx</p>
                            </div>
                            <div className="flex items-center">
                                <input type="checkbox" className="mr-2 w-5 h-5 border border-[#888888] appearance-none bg-[#DADADA] checked:bg-green-600 checked:border-transparent focus:outline-none rounded" />
                                <span className="text-xs text-gray mt-4">
                                    By Using this form you agree with the storage and handling of your data by this website.
                                </span>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="bg-green-600 text-white px-8 ml-12 mb-6 mt-4 py-2 text-xs rounded hover:bg-green-700 transition items-center justify-center w-[80%]"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default JobForm;
