import { Status } from "@prisma/client";
import { Badge } from "@radix-ui/themes";

const statusMap: Record<
  Status,
  { label: string; color: "green" | "violet" | "red" }
> = {
  OPEN: { label: "Open", color: "green" },
  IN_PROGRESS: { label: "Progress", color: "violet" },
  CLOSED: { label: "Closed", color: "red" },
};

const IssueStatusBadge = ({ status }: { status: Status }) => {
  const { label, color } = statusMap[status];
  return (
    <Badge color={statusMap[status].color}>{statusMap[status].label}</Badge>
  );
};

export default IssueStatusBadge;
