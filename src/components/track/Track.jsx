import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'
import fybros from '../../assets/fybros.png'
function Track() {
    const context = useContext(myContext);
    const { mode } = context;
    return (
        <div>
            <section>
                <div className=" container mx-auto px-5 md:py-5">
                    <div className="flex flex-wrap -m-4 text-center">
                        <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                            <div className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                                
<img class="h-auto max-w-full" src={fybros} alt="image description"/>

                                    

                                <h2 className="title-font font-medium text-lg text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>Maru Bharuch Electricals</h2>
                                <p className="leading-relaxed">Electrical goods Wholesaler.
                                </p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                            <div className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                                

                                <h2 className="title-font font-medium text-lg text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>Property Valuer & BAUDA Registered Engineer  </h2>
                                <p className="leading-relaxed">For VISA and Various Loan
                                </p>
                            </div>
                        </div>

                        <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                            <div className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                               
                                <h2 className="title-font font-medium text-lg text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>Website Development</h2>
                                <p className="leading-relaxed">18, Narmada Darshan Complex,Opp GEB, Maktampur road, Bharuch
                                </p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Track