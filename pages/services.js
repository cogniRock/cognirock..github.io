import Link from "next/link";
import Layout from "../components/Layout";

import { services } from "../profile";

const ServiceCard = ({ service }) => (
    <div className="col-md-4 p-2">
        <div className="card h-100 d-flex flex-column"> 
            <div className="overflow">
                <img src={service.imageURL} alt="" className="card-img-top" />
            </div>
            <div className="card-body d-flex flex-column">
                <h1 className="mt-0 mb-auto">{service.title}</h1>
                <ul>
                    <li>{service.line1}</li>
                    <li>{service.line2}</li>
                    <li>{service.line3}</li>
                </ul>
                <Link href={`/service?title=${service.title}`} as = {`/service/${service.title}`} className="nav-link disabled" aria-disabled="true">
                    <button className="btn btn-light">Knoe More</button>
                </Link>
            </div>
        </div>
    </div>
);

const Services = () => {
    return (
        <Layout title="Technology Consulting Services" footer={false} dark>
            <div className="row">
                {services.map((service, i) => (
                    <ServiceCard service={service} key={i} />
                ))}
            </div>
        </Layout>
    );
};

export default Services;