//http://localhost:3000/clients/make/1

import { useRouter } from 'next/router';

function SelectedClientProjectsPage() {
    const router = useRouter();

    console.log(router.query);

    return (
        <div>
            <h1>The Project page for a specific project for a Selected Client</h1>
        </div>
    );
}

export default SelectedClientProjectsPage;