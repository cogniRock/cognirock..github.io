import Link from 'next/link';
import Layaut from '../components/Layout'
import { experiences, skills, projects, solutions,companies,travel_companies } from '../profile';

const Index = () => (
    <Layaut>

        {/* Fondo fijo con superposición justo debajo del NavBar */}
        <div className="fixed-background">
            {/* header card */}
            <header className='row'>
                <div className="text-center align-center">
                    <h1>Your real IT Partner</h1>
                    <h3>Our passion is to help companies growth through developing customized software solutions</h3>
                </div>
                ...
            </header>

        </div>

        {/** Solutions */}
        <div className="row w-75 mx-auto">
            <div className="col-md-12 w-75 mx-auto">
                <div className="card card-body bg-light">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className='text-center text-dark'>Solutions</h1>
                        </div>

                        {
                            solutions.map(({ name, description, image, benefits, tags }, index) => (
                                <div className="col-md-4 p-2" key={index}>
                                    <div className="card h-100 mx-auto">
                                        <div className="overflow">
                                            <img src={`/${image}`} alt="" className='card-img-top' />
                                        </div>
                                        <div className="card-body">
                                            <h3 className="card-title text-uppercase text-center">{name}</h3>
                                            <p className="fw-bold">{benefits}</p>
                                            {/* Agregar tags aquí */}
                                            <div>
                                                {tags.map((tag, index) => (
                                                    <span key={index} className="badge bg-secondary m-1">
                                                        #{tag.toLowerCase()}
                                                    </span>
                                                ))}
                                            </div>
                                            <p>{description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
        {/** Companies' Experience */}
        <div className="fixed-background">

            <div className="text-center align-center">
                <h1>Companies´ Experience</h1>
                <h3>Where CogniRock members have experience with </h3>
            </div>

        </div>
         {/** Companies */}
         <div className="row w-75 mx-auto">
            <div className="col-md-12 w-75 mx-auto">
                <div className="card card-body bg-light ">
                    <div className="row">


                        {
                            companies.map(({ image,url}, index) => (
                                <div className="col-md-2 p-1" key={index}>
                                    <div className="card h-100 w-100">
                                        <div className="overflow-companies overflow">
                                            <img src={`/${image}`} alt="" className='card-img-top' />
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="text-center mt-4">
                        <Link href="" className='btn btn-outline-dark'>More</Link>
                    </div>
                </div>
            </div>
        </div>
        {/** Travel's Experience */}


        <div className="fixed-background">

            <div className="text-center align-center">
                <h1>Travel Companies’ Experience</h1>
                <h3>Where CogniRock members have travel’s companies experience with</h3>
            </div>

        </div>
        {/** Companies */}
        <div className="row w-75 mx-auto">
            <div className="col-md-12 w-75 mx-auto">
                <div className="card card-body bg-light">
                    <div className="row">
                        {
                            travel_companies.map(({ image,url}, index) => (
                                <div className="col-md-3 p-1" key={index}>
                                    <div className="card h-100 w-100 mx-auto">
                                        <div className="overflow-companies overflow">
                                            <img src={`/${image}`} alt="" className='card-img-top' />
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="text-center mt-4">
                        <Link href="" className='btn btn-outline-dark'>More</Link>
                    </div>
                </div>
            </div>
        </div>

    </Layaut >
)

export default Index;