import { afterEach, describe, expect, it, vi } from "vitest"
import { LoginA } from "./login";
import { Card } from "../components/Card/Card";
import { useContext } from "react";
import type { useNavigate } from "react-router-dom";

describe("Login", () =>{

const { mockSetIsLoggedIn, mockUseNavigate } = vi.hoisted(() => {
    return {
        mockSetIsLoggedIn: vi.fn(),
        mockUseNavigate: vi.fn()
    }
});
    vi.mock('react', async (importOriginal) => {
    const actual = await importOriginal<typeof import('react')>();
    return {
        ...actual,
        useContext: () => ({
            setIsLoggedIn: mockSetIsLoggedIn
        })
    };
});

vi.mock('react-router-dom', async (importOriginal) => {
    const actual = await importOriginal<typeof import('react-router-dom')>();
    return {
        ...actual,
        useNavigate: () => ({
            useNavigate: () => mockUseNavigate
        })
    };
});
    afterEach(() => {
        vi.restoreAllMocks();
    })

    const mockEmail = "clayton@dio.bank"


    it("Deve exibir um alert com boas vindas aso o e-mail sejá válido", async()=>{
        const response = await LoginA(mockEmail)
        expect(response).toBeTruthy()
    })

    it("Deve exibir um erro caso o e-mail seja inválido", async()=>{
        const response = await LoginA("email@invalido.com")
        expect(response).toBeFalsy()
    })
})