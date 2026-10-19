import React, { useState, useEffect } from 'react';
import { User, Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
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
    NavLink,
    MenuOverlay,
    MobilePanel,
    PanelHeader,
    MobileNavList,
    MobileNavLink,
    MobileOnly,
    DesktopOnly
} from './NavBarStyles';
import { Link } from 'react-router-dom';

const NavBarComponent = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { setIsOpen: setCartOpen } = useCart();

    const categories = [
        "Camisetas",
        "Bermuda & Shorts",
        "Calças",
        "Jaquetas & Moletons",
        "Tênis",
        "Acessórios"
    ];

    const toggleMenu = () => setIsMenuOpen(prev => !prev);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isMenuOpen]);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsMenuOpen(false);
        };
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, []);

    // Close menu if screen size changes to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <NavBarContainer>
            <TopRow>
                <LeftSection>
                    <User size={20} />
                    <WelcomeText>Olá, Murilo!</WelcomeText>
                </LeftSection>

                <CenterSection>
                    <Link to={"/"}>
                        <img src="/Logo.png" alt="BEWEAR Logo" />
                    </Link>
                </CenterSection>

                <RightSection>
                    <DesktopOnly>
                        <Search size={20} />
                    </DesktopOnly>
                    <Divider />
                    <ShoppingBag
                        size={20}
                        style={{ cursor: 'pointer' }}
                        onClick={() => setCartOpen(true)}
                    />
                    <MobileOnly>
                        <button
                            onClick={toggleMenu}
                            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center', color: 'inherit' }}
                            aria-expanded={isMenuOpen}
                            aria-controls="mobile-menu"
                        >
                            <Menu size={20} />
                        </button>
                    </MobileOnly>
                </RightSection>
            </TopRow>

            <BottomRow>
                <NavMenu>
                    {categories.map((category) => (
                        <NavLink key={category}>{category}</NavLink>
                    ))}
                </NavMenu>
            </BottomRow>

            {isMenuOpen && (
                <MenuOverlay onClick={() => setIsMenuOpen(false)}>
                    <MobilePanel
                        $isOpen={isMenuOpen}
                        onClick={(e) => e.stopPropagation()}
                        id="mobile-menu"
                    >
                        <PanelHeader>
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, color: 'inherit' }}
                                aria-label="Fechar menu"
                            >
                                <X size={24} />
                            </button>
                        </PanelHeader>
                        <MobileNavList>
                            {categories.map((category) => (
                                <MobileNavLink
                                    key={category}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {category}
                                </MobileNavLink>
                            ))}
                        </MobileNavList>
                    </MobilePanel>
                </MenuOverlay>
            )}
        </NavBarContainer>
    );
};

export default NavBarComponent;
