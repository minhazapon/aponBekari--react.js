


const ListDetails = ({query}) => {
     
    const {_id, email} = query

    return (
        <div>

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
					<th className="p-3">_ID #</th>
					<th className="p-3">EMAIL</th>
					
				</tr>
			</thead>
			<tbody>
				<tr className="border-b border-opacity-20 border-gray-700 bg-gray-900">
					<td className="p-3">
						<p>Users: {_id} </p>
					</td>
					<td className="p-3">
						<p>loginUsers {email} </p>
					</td>
					
					
				</tr>
				
				
				
			</tbody>
		</table>
	</div>
</div>

            </div>

            
        </div>
    );
};

export default ListDetails;