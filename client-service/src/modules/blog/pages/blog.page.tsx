import Link from "next/link"


const images = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export function BlogPage() {
    return (
        <>
            {/* Card Blog */}
            <div className="container px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                {/* Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 lg:gap-y-16 gap-10">
                    {
                        Array.from({ length: 20 }, (_, i) => (

                            <Link
                                className="group block rounded-xl overflow-hidden focus:outline-hidden"
                                href="#"
                            >
                                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
                                    <div className="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                                        <img
                                            className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"
                                            src={images}
                                            alt="Blog Image"
                                        />
                                    </div>
                                    <div className="grow">
                                        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600">
                                            Studio by Preline
                                        </h3>
                                        <p className="mt-3 text-gray-600">
                                            Produce professional, reliable streams easily leveraging Preline's
                                            innovative broadcast studio
                                        </p>
                                        <p className="mt-4 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium">
                                            Read more
                                            <svg
                                                className="shrink-0 size-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="m9 18 6-6-6-6" />
                                            </svg>
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                    {/* End Card */}
                </div>
                {/* End Grid */}
            </div>
            {/* End Card Blog */}
        </>

    )
}
