import { afterEach, describe, expect, it, vi } from "vitest"
import { LoginA } from "./login";

describe("Login", () =>{

    afterEach(() => {
        vi.restoreAllMocks();
    })

    it("Deve exibir um alert com boas vindas", ()=>{
        const mockAlert = vi.fn();
        vi.stubGlobal('alert', mockAlert);
        LoginA()
        expect(mockAlert).toHaveBeenCalledWith("Bem-vindo");
    })
})