import { BrandCardContainer } from "./BrandCardStyles";

type Props = {
    path: string;
    name: string;
};

const BrandCardComponent = ({ path, name }: Props) => {
    return (
        <BrandCardContainer>
            <div className="image-wrapper">
                <img src={`/icons/${path}`} alt={`Logo ${name}`} />
            </div>
            <p>{name}</p>
        </BrandCardContainer>
    );
};

export default BrandCardComponent;