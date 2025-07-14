import { Link } from "react-router-dom";
import { } from "react-icons/fa";
import { FaMapMarkerAlt, FaCalendarAlt, FaCheck } from 'react-icons/fa';


const jobdetailtext = () => {
    return (
        <div className="w-full md:w-[85%] ml-36 py-12">

            {/* Back to all jobs */}
            <div className="mb-0">
                <Link to="/careers" className="text-xs text-green-600 hover:underline">
                    &larr; Back to all jobs
                </Link>
            </div>

            {/* About Role */}
            <div className="mb-4 w-[71%] ">
                <h2 className="text-lg font-bold text-gray mb-2">Account Manager - Sales</h2>

                <p className="text-xs text-black flex flex-row mb-2">  {/*bg-white rounded-full p-1.5 flex items-center justify-center */}
                    <FaMapMarkerAlt className="text-gray text-[13px]" />

                    <span className="ml-2"> Building No. 3702, Shop No 3 & 4, Muweilah, Sharjah - UAE  |  Full Time  |  5,000 UAE - 25,000 AED per Year
                    </span>
                </p>
                <div className="flex items-center text-xs text-gray-500 space-x-4 mb-4">
                    <FaCalendarAlt className="mr-1 text-[#666666]" /> Posted: July 9, 2025
                </div>
            </div>

            {/* About Role */}
            <div className="mb-0 w-[90%] py-4 border-t border-gray">
                <h2 className="text-lg font-bold text-black mb-0">About the Role</h2>

                <p className="text-xs text-gray flex flex-row ">
                    We are looking for an enthusiastic and goal-driven Account Manager – Sales to join our dynamic team. In this role, you’ll be the trusted partner for our clients — understanding their needs, building strong relationships, and helping them achieve success with our products and services. You will play a key role in driving growth, ensuring client satisfaction, and unlocking new opportunities within existing accounts.
                </p>
            </div>



            {/* What will you do */}
            <div className="mb-4">
                <h2 className="text-xs font-bold text-gray mb-0">What will you do</h2>
                <ul className="list-disc list-inside text-xs text-gray leading-relaxed space-y-0">
                    <li className="marker:text-gray text-xs">Build and nurture long-term relationships with assigned clients.</li>
                    <li className="marker:text-gray text-xs">Understand client goals, business challenges, and industry trends.</li>
                    <li className="marker:text-gray text-xs">Identify and pursue new sales opportunities within existing accounts.</li>
                    <li className="marker:text-gray text-xs">Serve as the primary point of contact for client communications and queries.</li>
                    <li className="marker:text-gray text-xs">Prepare proposals, deliver presentations, and lead negotiations to close deals</li>
                    <li className="marker:text-gray text-xs">Collaborate closely with internal teams to ensure smooth project delivery and support.</li>
                    <li className="marker:text-gray text-xs">Meet or exceed monthly and quarterly sales targets.</li>
                    <li className="marker:text-gray text-xs">Maintain accurate records of account activity, pipeline, and forecasts using CRM tools.</li>
                    <li className="marker:text-gray text-xs">Resolve client issues quickly and effectively, ensuring a positive experience.</li>
                    <li className="marker:text-gray text-xs">Stay updated on industry developments and competitor activities.</li>
                </ul>
            </div>

            {/* We are looking for */}
            <div className="mb-4">
                <h2 className="text-xs font-bold text-gray mb-0">What will you do</h2>
                <ul className="list-disc list-inside text-xs text-gray leading-relaxed space-y-0">
                    <li className="marker:text-gray text-xs">Competitive salary plus performance incentives.</li>
                    <li className="marker:text-gray text-xs">Friendly and supportive work environment</li>
                    <li className="marker:text-gray text-xs">Opportunity to work with diverse clients and industries</li>
                    <li className="marker:text-gray text-xs">Professional growth and learning opportunities</li>
                    <li className="marker:text-gray text-xs">Health and wellness benefits</li>
                    <li className="marker:text-gray text-xs">Dynamic team that celebrates success together</li>
                </ul>
            </div>

            <div className="mb-4">
                <h2 className="text-xs font-bold text-gray mb-0">What will you do</h2>
                <ul className="text-xs text-gray leading-relaxed space-y-1 mt-2">
                    <li className="flex items-start gap-2">
                        <FaCheck className="text-white bg-darkgreen mt-0 rounded h-4 w-4 p-1 text-lg" />
                        <span>Competitive salary plus performance incentives.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <FaCheck className="text-white bg-darkgreen mt-0 rounded h-4 w-4 p-1 text-lg" />
                        <span>Friendly and supportive work environment</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <FaCheck className="text-white bg-darkgreen mt-0 rounded h-4 w-4 p-1 text-lg" />
                        <span>Opportunity to work with diverse clients and industries</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <FaCheck className="text-white bg-darkgreen mt-0 rounded h-4 w-4 p-1 text-lg" />
                        <span>Professional growth and learning opportunities</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <FaCheck className="text-white bg-darkgreen mt-0 rounded h-4 w-4 p-1 text-lg" />
                        <span>Health and wellness benefits</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <FaCheck className="text-white bg-darkgreen mt-0 rounded h-4 w-4 p-1 text-lg" />
                        <span>Dynamic team that celebrates success together</span>
                    </li>
                </ul>
            </div>



            {/* How to apply */}
            <div className="mb-4">
                <h2 className="text-xs font-bold text-gray mb-0">How to apply</h2>
                <p className="text-xs text-gray">
                    Apply now by Fill this form or send your resume and a short cover letter to careers@pestcontrol.com with the subject line “Account Manager – Sales Application”.
                </p>
            </div>

        </div>
    );
};

export default jobdetailtext;