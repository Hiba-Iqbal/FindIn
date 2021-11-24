import React from 'react'
import { Result, Button } from 'antd'
import { navigateToHome } from '../../utils/helper'

const NotFound = () => {
	return (
		<div>
			<Result
				status="404"
				title="404"
				subTitle="Sorry, the page you visited does not exist."
				extra={
					<Button type="primary" onClick={navigateToHome}>
						Back Home
					</Button>
				}
			/>
		</div>
	)
}

export default NotFound
