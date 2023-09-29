import { FeedItem } from "./FeedItem";
import { WriteNewPostCard } from "./WriteNewPostCard";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./primitives/DropdownMenu";
import { Separator } from "./primitives/Separator";

const SortByDivider = () => {
  return (
    <div className="flex flex-row mt-2">
      <div className="pt-2 w-full">
        <Separator className="bg-zinc-300" />
      </div>
      <span className="text-zinc-500 text-xs w-24 pl-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <span className="cursor-pointer">
              Sort by: <span className="font-semibold text-zinc-800">Top</span>
            </span>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-24">
            <DropdownMenuItem>
              <span>Top</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Recent</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </span>
    </div>
  );
};

export const Main = () => {
  return (
    <div style={{ gridArea: "main" }}>
      <WriteNewPostCard />
      <SortByDivider />
      <FeedItem
        type="post"
        content="Today, we are bringing together AI and quantum with Azure Quantum Elements, ushering in a new era of scientific discovery. Our goal is to compress the next 250 years of chemistry and materials science progress into the next 25."
        link={{
          title:
            "Accelerating scientific discovery with Azure Quantum - The Official Microsoft Blog",
          thumbnail:
            "https://media.licdn.com/dms/image/sync/D4E27AQEB37UEQdk_Zw/articleshare-shrink_800/0/1687600135384?e=1688212800&v=beta&t=N1G6JujaKefHRQAMKSIrmXntdMeWhm1AWYw8k41chFA",
          href: "https://blogs.microsoft.com/blog/2023/06/21/accelerating-scientific-discovery-with-azure-quantum/",
        }}
        author={{
          name: "Satya Nadella",
          subtext: "Chairman and CEO at Microsoft",
          imageUrl: "https://images.businessnewsdaily.com/app/uploads/2022/04/04081908/small-business-website.png",
          connectionDegree: "1st",
        }}
        stats={{
          likes: 5788,
          comments: 139,
          reposts: 593,
        }}
      />
      <FeedItem
        type="post"
        content="In my annual letter to shareholders, I reflect on our opportunity and responsibility to connect what technology can do with what the world needs it to do."
        link={{
          title:
            "My annual letter: A historic intersection of opportunity and responsibility",
          thumbnail:
            "https://media.licdn.com/dms/image/D5612AQFgZ0SQWJiFmA/article-cover_image-shrink_423_752/0/1666889019946?e=1692835200&v=beta&t=mRb40OnsC3Xq-FeTEGJiTTWyhdJ_28YUa_MkVienfRo",
          href: "https://www.linkedin.com/pulse/my-annual-letter-historic-intersection-opportunity-satya-nadella?trackingId=dxsWwqZOReOJKem4oxhXlg%3D%3D&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_content%3BpL6f%2BL5xQK%2BhHU6uCrNBdg%3D%3D",
        }}
        author={{
          name: "Satya Nadella",
          subtext: "Chairman and CEO at Microsoft",
          imageUrl: "https://images.businessnewsdaily.com/app/uploads/2022/04/04081908/small-business-website.png"
          ,connectionDegree: "1st",
        }}
        stats={{
          likes: 5361,
          comments: 73,
          reposts: 275,
        }}
      />
      <FeedItem
        type="post"
        content="Incredible day in New York for Salesforce AI Day. Huge thanks to all our customer TrAIlblazers, partners, media, and analysts who joined us. "
        thumbnail="https://media.licdn.com/dms/image/D4D22AQFLRo-p2OjMKQ/feedshare-shrink_800/0/1686611197634?e=1690416000&v=beta&t=A2bGER0kZYs6vX37v8sALclnrESFkCcqO9Y4vv3cr4s"
        author={{
          name: "Clara Shih",
          subtext: "CEO of Salesforce AI, Board Director & Entrepreneur",
          imageUrl: "https://images.businessnewsdaily.com/app/uploads/2022/04/04081908/small-business-website.png",
          connectionDegree: "3rd",
        }}
        stats={{
          likes: 837,
          comments: 39,
          reposts: 27,
        }}
      />
      <FeedItem
        type="post"
        content="Proud to announce the launch of our new sustainable data center region in Sweden, using 100% renewable energy and zero-waste operations."
        link={{
          title:
            "Google unveils its first sustainable data center region in Sweden",
          thumbnail:
            "https://media.licdn.com/dms/image/D4D22AQHwbzamGqyhWQ/feedshare-shrink_800/0/1686151921691?e=1690416000&v=beta&t=6VEWqCSPlxjPcK2BtSpSBLsU_oOTeHM2jL95igfB71E",
          href: "https://www.blog.google/inside-google/infrastructure/google-announces-first-sustainable-data-center-region-in-sweden/",
        }}
        author={{
          name: "Sundar Pichai",
          subtext: "CEO at Google",
          imageUrl: "https://images.businessnewsdaily.com/app/uploads/2022/04/04081908/small-business-website.png",
          connectionDegree: "2nd",
        }}
        stats={{
          likes: 4891,
          comments: 131,
          reposts: 503,
        }}
      />
      <FeedItem
        type="post"
        content="Really proud of the team for our continued advancements in VR technology. The future of communication is exciting!"
        link={{
          title: "Facebook's new VR tech is pushing the boundaries",
          thumbnail:
            "https://media.licdn.com/dms/image/D4D22AQHylkJCC7URHg/feedshare-shrink_2048_1536/0/1686151922450?e=1690416000&v=beta&t=LCeNcO66GfzqmebCRioVKXrlXFNPxvhRxPyChwE-DE8",
          href: "https://www.facebook.com/tech/news/tab/new-vr-tech",
        }}
        author={{
          name: "Mark Zuckerberg",
          subtext: "CEO at Facebook",
          imageUrl: "https://images.businessnewsdaily.com/app/uploads/2022/04/04081908/small-business-website.png",
          connectionDegree: "3rd",
        }}
        stats={{
          likes: 3254,
          comments: 97,
          reposts: 213,
        }}
      />
      <FeedItem
        type="post"
        content="Exciting to see SpaceX push the boundaries of space technology once more. The successful launch of Falcon Heavy was a sight to behold."
        thumbnail="https://media.licdn.com/dms/image/sync/D4E27AQHqMUKIczW0Tg/articleshare-shrink_800/0/1687502422250?e=1688234400&v=beta&t=_Y664YQRh3cSwDds-TYv8P4otlJ-KTWA2nSysvwOStw"
        author={{
          name: "Elon Musk",
          subtext: "CEO of SpaceX and Tesla, Entrepreneur",
          imageUrl: "https://images.businessnewsdaily.com/app/uploads/2022/04/04081908/small-business-website.png,
          connectionDegree: "2nd",
        }}
        stats={{
          likes: 18537,
          comments: 839,
          reposts: 1247,
        }}
      />
    </div>
  );
};
