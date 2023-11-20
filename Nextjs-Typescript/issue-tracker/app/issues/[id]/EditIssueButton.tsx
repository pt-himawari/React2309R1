import { Button, Flex } from "@radix-ui/themes";
import Link from "next/link";
import { HiOutlinePencilSquare } from "react-icons/hi2";

const EditIssueButton = ({ issueID }: { issueID: number }) => {
  return (
    <>
      <Button>
        <Link
          href={`/issues/edit/${issueID}`}
          className=" max-w-full max-h-full"
        >
          <Flex justify="start" align="center" gap="2">
            <HiOutlinePencilSquare />
            Edit Issue &nbsp;&nbsp;&nbsp;&nbsp;
          </Flex>
        </Link>
      </Button>
    </>
  );
};
export default EditIssueButton;
