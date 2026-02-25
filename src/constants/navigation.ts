export interface NavLinkItem {
    name: string;
    href: string;
    onClick?: () => void;
}

export const navLinks: NavLinkItem[] = [
    { name: "A Clínica", href: "/clinica" },
    { name: "Dra. Vivian", href: "/dra-vivian-sanches" },
    { name: "Especialidades", href: "/servicos" },
    { name: "Protocolos", href: "/protocolos" },
    { name: "Dicas de Saúde", href: "/dicas-de-saude" },
    { name: "Contato", href: "/contato" }
];
