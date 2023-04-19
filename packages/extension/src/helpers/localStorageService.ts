import { Memento } from 'vscode';

export function LocalStorageService(storage: Memento) {
    function getValue(key: string) {
        return storage.get(key, null);
    }
    function setValue(key: string, value: any) {
        storage.update(key, value);
    }

    return {
        getValue,
        setValue,
    };
}
