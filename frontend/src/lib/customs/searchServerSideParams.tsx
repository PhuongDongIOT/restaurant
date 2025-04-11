import { parseAsString, createLoader } from 'nuqs/server'
 
// Describe your search params, and reuse this in useQueryStates / createSerializer:
export const categoriesSearchParams = {
    encryption: parseAsString.withDefault(''),
}
 
export const loadCategoriesSearchParams = createLoader(categoriesSearchParams)