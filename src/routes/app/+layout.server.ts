import { CASClient } from "$lib/server/cas";

export const load = async ({ locals }) => {
    // Redirect to CAS server if no session
    const isSession = locals.session && locals.session.data;
    if (!isSession || !locals.session.data.displayname) {
        CASClient.authenticate();
    }

    // Get user's session data
    const sessionData = locals.session.data;
    return {
        netid: sessionData.netid,
        name: sessionData.displayname
    };
};
