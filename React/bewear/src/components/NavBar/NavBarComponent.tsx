import { User, Search, ShoppingBag, Menu } from 'lucide-react';
import {
    NavBarContainer,
    TopRow,
    LeftSection,
    WelcomeText,
    CenterSection,
    RightSection,
    Divider,
    BottomRow,
    NavMenu,
    NavLink
} from './NavBarStyles';

const NavBarComponent = () => {
    const categories = [
        "Camisetas",
        "Bermuda & Shorts",
        "Calças",
        "Jaquetas & Moletons",
        "Tênis",
        "Acessórios"
    ];

    return (
        <NavBarContainer>
            <TopRow>
                <LeftSection>
                    <User size={20} />
                    <WelcomeText>Olá, Murilo!</WelcomeText>
                </LeftSection>

                <CenterSection>
                    <img src="/Logo.png" alt="BEWEAR Logo" />
                </CenterSection>

                <RightSection>
                    <Search size={20} className="desktop-only" />
                    <Divider />
                    <ShoppingBag size={20} />
                    <Menu size={20} className="mobile-only" />
                </RightSection>
            </TopRow>

            <BottomRow>
                <NavMenu>
                    {categories.map((category) => (
                        <NavLink key={category}>{category}</NavLink>
                    ))}
                </NavMenu>
            </BottomRow>
        </NavBarContainer>
    );
};

export default NavBarComponent;
