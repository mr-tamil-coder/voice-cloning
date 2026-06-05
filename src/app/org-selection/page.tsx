import { OrganizationList } from '@clerk/nextjs'

export default function OrganizationListPage() {
  return (
    <div className='flex min-h-screen items-center justify-center bg-background'>
        <OrganizationList
        hidePersonal
        afterCreateOrganizationUrl="/"
        afterSelectPersonalUrl="/"
        afterSelectOrganizationUrl="/"
         />
    </div>
  )
}