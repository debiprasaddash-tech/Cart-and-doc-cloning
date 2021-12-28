

const company = () => {
    return (
        <>
            <div className='grid grid-cols-12 m-5'>
                <div className='col-span-9'>
                    <input type='text' placeholder='Search' className='rounded p-[8px] text-xs' />
                    <a className='bg-gray-600/70 text-white py-2 px-3 rounded ml-3 text-xs
                    hover:bg-gray-700'>Search</a>
                </div>
                <div className='col-span-3'>
                    <a className='bg-blue-600/70 text-xs text-white py-2 px-3 rounded float-right
                    hover:bg-blue-700'>+ Create Company</a>
                </div>
                <div className='col-span-12 mt-5 bg-white'>
                    <table className='table-fixed w-full'>
                        <thead className='bg-gray-700/20 rounded'>
                            <tr>
                                <th className='p-3 text-xs'>#</th>
                                <th className='p-3 text-xs'>Company Name</th>
                                <th className='p-3 text-xs'>Group Name</th>
                                <th className='p-3 text-xs'>Enrolled Members</th>
                                <th className='p-3 text-xs'>Total Members</th>
                                <th className='p-3 text-xs'>Status</th>
                                <th className='p-3 text-xs'>Action</th>
                            </tr>
                        </thead>
                        <tbody className=''>
                            <tr className='border-2 border-b-gary-600'>
                                <td className='py-4 pl-16'><a className='text-white bg-[#556ee6] rounded-full py-2 px-[1rem]'>x</a></td>
                                <td className='py-4 pl-16'><a className='text-gray-700 text-xs font-medium'>Xcel Hr</a></td>
                                <td className='py-4 pl-16'><a className='text-gray-700 text-xs font-medium'>ADP</a></td>
                                <td className='py-4 pl-16'><a className='text-gray-700 text-xs font-medium'>90</a></td>
                                <td className='py-4 pl-16'><a className='text-gray-700 text-xs font-medium'>90</a></td>
                                <td className='py-4 pl-16'><button className='text-blue-500 bg-[#556ee6]/30 text-xs rounded p-0.5'>Active</button></td>
                                <td className='py-4 pl-16'>
                                    <i class="fas fa-cloud-upload-alt text-gray-700/70 mr-4"></i>
                                    <i class="fas fa-edit text-gray-700/70"></i>
                                    <i class="fas fa-user-check text-[#34c38f] ml-4"></i></td>
                            </tr>
                            <tr className='border-2 border-b-gary-600'>
                                <td className='py-4 pl-16'><a className='text-white bg-[#556ee6] rounded-full py-2 px-[1rem]'>x</a></td>
                                <td className='py-4 pl-16'><a className='text-gray-700 text-xs font-medium'>Xcel Hr</a></td>
                                <td className='py-4 pl-16'><a className='text-gray-700 text-xs font-medium'>ADP</a></td>
                                <td className='py-4 pl-16'><a className='text-gray-700 text-xs font-medium'>90</a></td>
                                <td className='py-4 pl-16'><a className='text-gray-700 text-xs font-medium'>90</a></td>
                                <td className='py-4 pl-16'><button className='text-blue-500 bg-[#556ee6]/30 text-xs rounded p-0.5'>Active</button></td>
                                <td className='py-4 pl-16'>
                                    <i class="fas fa-cloud-upload-alt text-gray-700/70 mr-4"></i>
                                    <i class="fas fa-edit text-gray-700/70"></i>
                                    <i class="fas fa-user-check text-[#34c38f] ml-4"></i></td>
                            </tr>
                            <tr className='border-2 border-b-gary-600'>
                                <td className='py-4 pl-16'><a className='text-white bg-[#556ee6] rounded-full py-2 px-[1rem]'>x</a></td>
                                <td className='py-4 pl-16'><a className='text-gray-700 text-xs font-medium'>Xcel Hr</a></td>
                                <td className='py-4 pl-16'><a className='text-gray-700 text-xs font-medium'>ADP</a></td>
                                <td className='py-4 pl-16'><a className='text-gray-700 text-xs font-medium'>90</a></td>
                                <td className='py-4 pl-16'><a className='text-gray-700 text-xs font-medium'>90</a></td>
                                <td className='py-4 pl-16'><button className='text-blue-500 bg-[#556ee6]/30 text-xs rounded p-0.5'>Active</button></td>
                                <td className='py-4 pl-16'>
                                    <i class="fas fa-cloud-upload-alt text-gray-700/70 mr-4"></i>
                                    <i class="fas fa-edit text-gray-700/70"></i>
                                    <i class="fas fa-user-check text-[#34c38f] ml-4"></i></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default company
