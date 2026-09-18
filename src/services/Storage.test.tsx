import { describe, expect, it, vi } from "vitest";
import { changeLocalStorage, createLocalStorage, getAllLocalStorage } from "./Storage";


const dioBank = {
    login: false
}

describe('Storage', () => {

    const mockSetItem = vi.spyOn(Storage.prototype, 'setItem')

    it("Deve retornar o objeto do localStorage com a chave dioBank", () => {
        const MmockGetItem = vi.spyOn(Storage.prototype, 'getItem')
        getAllLocalStorage()
        expect(MmockGetItem).toHaveBeenCalledWith('dioBank')
    })

    it("Deve criar um objeto no localStorage", () => {
        createLocalStorage()
        expect(mockSetItem).toHaveBeenCalledWith('dioBank', JSON.stringify(dioBank))

    })

    it("Deve alterar o valor do objeto no localStorage", () => {
        changeLocalStorage(dioBank);
        expect(mockSetItem).toHaveBeenCalledWith('dioBank', JSON.stringify(dioBank) )
    })
})  