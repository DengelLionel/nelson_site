/* eslint no-useless-escape: 0 */
export function useToSlug(text) {
    let txt = text.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    return txt
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9\-]/g, '')
}
