import { IDictionary } from "../interfaces/IDictionary";

export class Dictionary<K, V> implements IDictionary<K, V> {

    private map: Map<K, V>;

    constructor(){
        this.map = new Map<K, V>();
    }

    public Map() : Map<K, V> { return this.map; }
    
    public Keys() : Array<K> { return Array.from(this.map.keys()); }

    public Values() : Array<V> { return Array.from(this.map.values()); }

    public Entries() : Array<[K, V]>{ return Array.from(this.map.entries()); }

    public Set(key: K, value: V ): void { this.map.set(key, value); }

    public Get(key: K): V | undefined { return this.map.get(key); }

    public Has(key: K ): boolean { return this.map.has(key); }

    public Delete(key: K ): boolean { return this.map.delete(key); }

    public Clear(): void { return this.map.clear(); }
}