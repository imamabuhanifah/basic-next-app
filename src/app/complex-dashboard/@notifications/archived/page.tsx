import Card from "@/components/card";
import Link from "next/link";

export default function ArchivedNotifications() {
    return (
        <Card>
            Archived Notifications
            <Link href={"/complex-dashboard"}>Default</Link>
        </Card>
    );
}