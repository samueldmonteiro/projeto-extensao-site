import React from 'react'
import Header from '../../components/Header'
import TrigonometricCircle from '../Subjects/TrigonometricCircle'
import CartesianPlane from '../Subjects/CartesianPlane'
import { useSubjectContext } from '../../context/SubjectContext'
import SelectSubjectInfo from './SelectSubjectInfo'

const Home = () => {

	const { currentSubject } = useSubjectContext()

	return (

		<>
			<Header />
			{currentSubject && currentSubject.page}
			{!currentSubject && <SelectSubjectInfo/>}
		</>
	)
}

export default Home