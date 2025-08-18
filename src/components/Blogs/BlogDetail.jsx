import { FaCalendarAlt } from "react-icons/fa";
import heroImg from "@/assets/Blogs/blogdetailHero.webp"
const BlogDetail = () => {
    return (
        <div className="lg:w-full ml-24 py-12 flex flex-col">
            {/* Blog Image */}
            <img
                src={heroImg}
                alt="Blog Detail"
                className="w-[90%] rounded mb-6"
            />

            {/* Blog Meta */}
            <div className="flex items-center text-xs text-gray-500 space-x-4 mb-4">
                <div className="flex items-center">
                    <FaCalendarAlt className="mr-1" /> July 9, 2025
                </div>

            </div>
            <div className="bg-bggray w-[45%] rounded-lg mb-2 p-4">
                <p className="font-semibold text-sm  mb-1">Table of Content</p>
                <ol className="list-decimal list-inside mx-2 text-xs text-gray">
                    <li>Keep It Clean: Prevention Is Key</li>
                    <li>Seal Entry Points</li>
                    <li>Use Natural Repellents</li>
                    <li>Try Biological Pest Control</li>
                    <li>Hire Eco-Friendly Pest Control Professionals</li>
                </ol>
            </div>

            {/* Blog Title */}
            <h1 className="text-xl font-bold mb-0.5">
                5 Eco-Friendly Pest Control Methods You Should Know About
            </h1>

            {/* Blog Content */}
            <div className="">
                <p className="text-[13px] mb-1  justify-center space-y-0 mr-40 text-[#777777]">
                    Pests can cause stress, damage property, and spread disease — but harsh chemical treatments often pose risks to your family, pets, and the environment. The good news? You can control pests naturally and responsibly. In this blog, we share five proven, eco-friendly pest control methods that help you maintain a safe, healthy, and pest-free home without relying on harmful chemicals.
                </p>

                <h1 className="text-lg font-bold  mb-0.5">1. Keep a Clean: Prevention is Key</h1>
                <p className="text-[13px]  justify-center mb-1 mr-40 text-[#777777]">
                    One of the simplest and most effective eco-friendly pest control methods is good housekeeping. Crumbs, food scraps, and clutter attract pests like ants, cockroaches, and rodents.
                    <ul className="list-disc list-inside space-y-0 mx-2">
                        <li>Wipe kitchen counters daily.</li>
                        <li>Store food in airtight containers.</li>
                        <li>Empty garbage bins regularly and keep lids tightly closed.</li>
                        <li>Declutter storage areas to eliminate hiding spots.</li>
                    </ul>
                    A clean home leaves pests with nothing to feed on and nowhere to hide
                </p>

                <h1 className="text-lg font-bold mb-0.5">2. Seal Entry Points</h1>
                <p className="text-[13px]  justify-center mb-1 mr-40 text-[#777777]">
                    Many pests enter your home through tiny cracks and gaps in doors, windows, and walls. Sealing these entry points is a safe, chemical-free way to keep unwanted visitors out.
                    <ul className="list-disc list-inside mx-2">
                        <li>Use weather stripping around doors and windows.</li>
                        <li>Fill cracks and holes with silicone caulk or steel wool.</li>
                        <li>Install mesh screens on windows and vents.</li>
                    </ul>

                    By blocking their access, you reduce the need for any treatment later.
                </p>


                <h1 className="text-lg font-bold mb-0.5">3. Use Natural Repellents </h1>
                <p className="text-[13px]  justify-center mb-1 space-y-0 mr-40 text-[#777777]">
                    Nature provides plenty of pest-repelling ingredients you can use safely at home. Here are a few easy ideas:
                    <ul className="list-disc list-inside space-y-0 mx-2">
                        <li>Essential oils: Peppermint, lavender, and eucalyptus oils repel ants, spiders, and mosquitoes. Mix with water and spray around entryways.</li>
                        <li>Vinegar: Wipe counters with a vinegar solution to deter ants.</li>
                        <li>Herbs: Plant basil, mint, or rosemary near windows to repel insects naturally.</li>
                    </ul>
                    These methods are non-toxic, safe for kids and pets, and leave your home smelling fresh.
                </p>

                <h1 className="text-lg font-bold mb-0.5">4. Try Biological Pest Control</h1>
                <p className="text-[13px]  justify-center mb-1 space-y-0 mr-40 text-[#777777]">
                    Biological pest control means using natural predators or beneficial insects to manage pest populations instead of chemicals.
                    <ul className="list-disc list-inside space-y-0 mx-2">
                        <li>Introduce ladybugs to your garden to control aphids.</li>
                        <li>Use nematodes (microscopic worms) in soil to reduce harmful grubs.</li>
                        <li>Encourage birds and bats in your yard with birdhouses — they eat mosquitoes and insects.</li>
                    </ul>
                    This approach works best for outdoor spaces and gardens, creating a balanced ecosystem.
                </p>

                <h1 className="text-lg  font-bold mb-0.5">5. Hire Eco-Friendly Pest Control Professionals</h1>
                <p className="text-[13px]  justify-center  mb-1 space-y-0 mr-40 text-[#777777]">
                    Sometimes, professional help is the safest option — but you don’t have to sacrifice eco-friendly values. Many pest control companies now offer green treatments using safe, low-toxicity products approved by local authorities.
                    <ul className="list-disc list-inside space-y-0 mx-2">
                        <li>Choose a licensed provider who uses environmentally responsible techniques.</li>
                        <li>Ask about integrated pest management (IPM) — this focuses on prevention, monitoring, and minimal chemical use.</li>
                        <li>Schedule regular inspections to catch issues early, reducing the need for harsh treatments.</li>
                    </ul>
                    Working with trusted professionals ensures pests are controlled effectively while keeping your family and the environment safe.
                </p>
            </div>

            {/* Leave a Reply */}
            <div className="mt-8">
                <h2 className="text-lg font-semibold mb-0">Leave a Reply</h2>
                <p className="text-xs text-[#777777] mb-2">Your email address will not be published. Required fields are marked.</p>
                <form className="space-y-2">
                    <div>
                        <label className="text-xs">Comment</label>
                        <textarea
                            rows="4"
                            className="w-[90%] border border-[#DEDEDE] h-[20vh] bg-bggray rounded px-3 mr-20 py-2 text-xs"
                            placeholder="write a comment..."
                        ></textarea>
                    </div>
                    <div className="w-[90%]">
                        <label className="block text-xs mb-1">Name</label>
                        <input
                            type="email"
                            placeholder="Phone No"
                            className="w-full border border-[#DEDEDE] bg-bggray rounded px-3 py-2 text-xs"
                        />
                    </div>


                    <div className="w-[90%]">
                        <label className="block text-xs mb-1">E-mail</label>
                        <input
                            type="email"
                            placeholder="Last Name"
                            className="w-full border border-[#DEDEDE] bg-bggray rounded px-3 py-2 text-xs"
                        />
                    </div>


                    <div className="w-[90%]">
                        <label className="block text-xs mb-1">Website</label>
                        <input
                            type="email"
                            placeholder="E-mail"
                            className="w-full border border-[#DEDEDE] bg-bggray rounded px-3 py-2 text-xs"
                        />
                    </div>


                    <div className="flex items-center">
                        <input type="checkbox" className="mr-2 w-5 h-5 appearance-none bg-bggray checked:bg-green-600 checked:border-transparent focus:outline-none rounded" />
                        <span className="text-xs text-gray-600">
                            Save for the next time.
                        </span>
                    </div>
                    <button
                        type="submit"
                        className="bg-green-600 text-white px-6 py-2 rounded text-xs"
                    >
                        Post Comment
                    </button>
                </form>
            </div>
        </div>
    );
};

export default BlogDetail;
