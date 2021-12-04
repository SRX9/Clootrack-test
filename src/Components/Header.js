const Header = () => {
    return (
        <header>
            <div class="md:flex space-x-16 mt-10 md:mr-0 mr-10">
                <div class="md:flex items-center pl-16 ">
                    <div class="">
                        <h1 class="lg:text-5xl  font-bold leading-tight text-3xl">Clootrack Software Engineer (Frontend)</h1>
                        <p class="mt-4 text-lg font-normal "> Hiring Challenge Assessment</p>
                        <div class="flex mt-4 w-max items-center space-x-3 py-3 px-6 bg-indigo-600 text-white rounded-lg  transition-all duration-400 transform hover:scale-105 cursor-pointer hover:shadow-lg">
                            <a href="https://github.com/SRX9/Clootrack-test" target="_blank" class="text-sm text-md ">Code Implementation</a>
                        </div>
                    </div>
                </div>
                <div class="max-w-lg pb-12 pl-24 md:flex justify-center items-center  hidden">
                    <img class="rounded-lg" src="https://media-fastly.hackerearth.com/media/companies/cde51a2-Untitled1.jpg" alt="" />
                </div>
            </div>
        </header>
    );
}

export default Header;
