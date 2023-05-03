export interface IDictionary<K, V> {
    
    /**
     * Returns a map<K, V> object with all the entries.
     * @returns Map<K, V>
     */
    Map() : Map<K, V>;
    
    /**
     * Returns a Array< K > with all the dictionary keys.
     * @returns Array< K >
     */
    Keys() : Array<K>;
    
    /**
     * Returns a Array< V > with all the dictionary values.
     * @returns Array< V >
     */
    Values() : Array<V>;

    /**
     * Returns a Array<[K, V]> with all the dictionary entries.
     * @returns {Array<[K, V]>}
     */
    Entries() : Array<[K, V]>;

    /**
     * Add a new entry to the dictionary.
     * @param {K} key the entry key
     * @param {V} value the entry value
     * @returns void
     */
    Set(key: K, value: V ): void;

    /**
     * Returns the {V} value for the {K} key if exists otherwise undefined.
     * @param {K} key the entry key
     * @returns V | undefined
     */
    Get(key: K): V | undefined ;

    /**
     * Returns true if the {K} key exists otherwise false.
     * @param {K} key the entry key
     * @returns boolean
     */
    Has(key: K ): boolean;
    
    /**
     * Deletes an entry by a {K} key, if the {K} key exists returns true otherwise false.
     * @param {K} key the entry key
     * @returns boolean
     */
    Delete(key: K ): boolean;

    /**
     * Deletes all entries from the dictionary.
     * @returns void
     */
    Clear(): void;
}