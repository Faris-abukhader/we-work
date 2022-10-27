import Image from 'next/image'
export default function AccountTypeCard({ label, icon, hasHandler = true, clickHandler, accountType = '' }) {
    const handler = () => {
        if (hasHandler) {
            clickHandler(label.toLocaleLowerCase()[0])
        }
    }
    return (
        <div onClick={handler} className={`border border-blue-300 p-2 rounded-lg text-center bg-blue-700 hover:cursor-pointer ${accountType == label.toLocaleLowerCase()[0] && 'border-2'}`}>
            <p className="text-xs text-gray-50">{label}</p>
            <Image src={`/icons/${icon}`} width={90} height={90} alt='freelancer' />
        </div>
    )
}
