
import { useEffect, useState } from "react";




const UserList = () => {
    
    // const {data: query} = useQuery({

    //   queryKey: ['query'],
    //   queryFn: async () => {
    //     const res = await fetch('http://localhost:5000/signData')
    //     res.json()
    //   }
    // })


    const [query, setQue] = useState([])
    
    useEffect( () => {
       
      fetch('http://localhost:5000/signData')
      .then(res => res.json())
      .then(data => setQue(data))


    } , [])

    return (
          <div>

<div className="container p-2 mx-auto sm:p-4 text-gray-100">
	<h2 className="mb-4 text-2xl font-semibold leading-tight">Invoices</h2>
	<div className="overflow-x-auto">
		<table className="min-w-full text-xs">
			<colgroup>
				<col />
				<col />
				<col />
				<col />
				<col />
				<col className="w-24" />
			</colgroup>
			<thead className="bg-gray-700">
				<tr className="text-left">
					<th className="p-3">Invoice #</th>
					<th className="p-3">Client</th>
					<th className="p-3">Issued</th>
					<th className="p-3">Due</th>
					<th className="p-3 text-right">Amount</th>
					<th className="p-3">Status</th>
				</tr>
			</thead>
			<tbody>
				

                  {

                          query.map( query=> <div>


<tr className="border-b border-opacity-20 border-gray-700 bg-gray-900">
					<td className="p-3">
						<p> {query._id} </p>
					</td>
					<td className="p-3">
						<p>  {query.email} </p>
					</td>
					<td className="p-3">
						<p>14 Jan 2022</p>
						<p className="text-gray-400">Friday</p>
					</td>
					<td className="p-3">
						<p>01 Feb 2022</p>
						<p className="text-gray-400">Tuesday</p>
					</td>
					<td className="p-3 text-right">
						<p>$15,792</p>
					</td>
					<td className="p-3 text-right">
						<span className="px-3 py-1 font-semibold rounded-md bg-violet-400 text-gray-900">
							<span>Pending</span>
						</span>
					</td>
				</tr>


                          </div> )



                  }
				<tr className="border-b border-opacity-20 border-gray-700 bg-gray-900">
					<td className="p-3">
						<p>97412378923</p>
					</td>
					<td className="p-3">
						<p>Tesla Inc.</p>
					</td>
					<td className="p-3">
						<p>14 Jan 2022</p>
						<p className="text-gray-400">Friday</p>
					</td>
					<td className="p-3">
						<p>01 Feb 2022</p>
						<p className="text-gray-400">Tuesday</p>
					</td>
					<td className="p-3 text-right">
						<p>$275</p>
					</td>
					<td className="p-3 text-right">
						<span className="px-3 py-1 font-semibold rounded-md bg-violet-400 text-gray-900">
							<span>Pending</span>
						</span>
					</td>
				</tr>
				<tr className="border-b border-opacity-20 border-gray-700 bg-gray-900">
					<td className="p-3">
						<p>97412378923</p>
					</td>
					<td className="p-3">
						<p>Coca Cola co.</p>
					</td>
					<td className="p-3">
						<p>14 Jan 2022</p>
						<p className="text-gray-400">Friday</p>
					</td>
					<td className="p-3">
						<p>01 Feb 2022</p>
						<p className="text-gray-400">Tuesday</p>
					</td>
					<td className="p-3 text-right">
						<p>$8,950,500</p>
					</td>
					<td className="p-3 text-right">
						<span className="px-3 py-1 font-semibold rounded-md bg-violet-400 text-gray-900">
							<span>Pending</span>
						</span>
					</td>
				</tr>
				<tr className="border-b border-opacity-20 border-gray-700 bg-gray-900">
					<td className="p-3">
						<p>97412378923</p>
					</td>
					<td className="p-3">
						<p>Nvidia Corporation</p>
					</td>
					<td className="p-3">
						<p>14 Jan 2022</p>
						<p className="text-gray-400">Friday</p>
					</td>
					<td className="p-3">
						<p>01 Feb 2022</p>
						<p className="text-gray-400">Tuesday</p>
					</td>
					<td className="p-3 text-right">
						<p>$98,218</p>
					</td>
					<td className="p-3 text-right">
						<span className="px-3 py-1 font-semibold rounded-md bg-violet-400 text-gray-900">
							<span>Pending</span>
						</span>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>
          </div>
    );
};

export default UserList;