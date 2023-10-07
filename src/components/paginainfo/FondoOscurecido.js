const FondoOscurecido = ({ open }) => {
    if (!open) {
        return null
    }

    return (
        <div className="fixed lg:w-full h-full right-0 z-[504] brightness-50 backdrop-blur-sm" />
    )
}
export default FondoOscurecido
