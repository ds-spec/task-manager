import React from "react";
import assets from "../../assets/assets";

const MembersList = () => {
  return (
    <>
      <div className="container mx-auto -mt-6">
        <table className="table-fixed mx-auto border-separate border-spacing-x-44 text-black">
          <thead>
            <tr>
              <th className="px-6 py-6 text-xl text-[#2a2a2b] font-normal">
                Assignees
              </th>
              <th className="px-6 py-6 text-xl text-[#2a2a2b] font-normal">
                Status
              </th>
              <th className="px-6 py-6 text-xl text-[#2a2a2b] font-normal">
                Role
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-6 py-6 text-xl flex items-center gap-3">
                <img
                  className="w-12 rounded-full aspect-square border-2 p-0.5 border-[#797ACD]"
                  src={assets.user2}
                />
                <div>
                  <div>Annie Haulman</div>
                  <div className="text-sm">helloannie@emial.com</div>
                </div>
              </td>
              <td className="mx-10 py-2 text-base">
                <span className="bg-[#ACD8D4] px-4 py-2 rounded-full">
                  Office work
                </span>
              </td>
              <td className="px-6 py-6 text-xl">Product Manager</td>
            </tr>
            <tr>
              <td className="px-6 py-6 text-xl flex items-center gap-3">
                <img
                  className="w-12 rounded-full aspect-square border-2 p-0.5 border-[#797ACD]"
                  src={assets.user1}
                />
                <div>
                  <div>Rosalyn Davis</div>
                  <div className="text-sm">rosalyn@emial.com</div>
                </div>
              </td>
              <td className="mx-10 py-2 text-base">
                <span className="bg-[#E9C2E4] px-4 py-2 rounded-full">
                  On a break
                </span>
              </td>
              <td className="px-6 py-6 text-xl">UX Product manager</td>
            </tr>
            <tr>
              <td className="px-6 py-6 text-xl flex items-center gap-3">
                <img
                  className="w-12 rounded-full aspect-square border-2 p-0.5 border-[#797ACD]"
                  src={assets.user2}
                />
                <div>
                  <div>Annie Haulman</div>
                  <div className="text-sm">helloannie@emial.com</div>
                </div>
              </td>
              <td className="mx-10 py-2 text-base">
                <span className="bg-[#ACD8D4] px-4 py-2 rounded-full">
                  Office work
                </span>
              </td>
              <td className="px-6 py-6 text-xl">Product Manager</td>
            </tr>
            <tr>
              <td className="px-6 py-6 text-xl flex items-center gap-3">
                <img
                  className="w-12 rounded-full aspect-square border-2 p-0.5 border-[#797ACD]"
                  src={assets.user1}
                />
                <div>
                  <div>Rosalyn Davis</div>
                  <div className="text-sm">rosalyn@emial.com</div>
                </div>
              </td>
              <td className="mx-10 py-2 text-base">
                <span className="bg-[#E9C2E4] px-4 py-2 rounded-full">
                  On a break
                </span>
              </td>
              <td className="px-6 py-6 text-xl">UX Product manager</td>
            </tr>
            <tr>
              <td className="px-6 py-6 text-xl flex items-center gap-3">
                <img
                  className="w-12 rounded-full aspect-square border-2 p-0.5 border-[#797ACD]"
                  src={assets.user2}
                />
                <div>
                  <div>Annie Haulman</div>
                  <div className="text-sm">helloannie@emial.com</div>
                </div>
              </td>
              <td className="mx-10 py-2 text-base">
                <span className="bg-[#ACD8D4] px-4 py-2 rounded-full">
                  Office work
                </span>
              </td>
              <td className="px-6 py-6 text-xl">Product Manager</td>
            </tr>
            <tr>
              <td className="px-6 py-6 text-xl flex items-center gap-3">
                <img
                  className="w-12 rounded-full aspect-square border-2 p-0.5 border-[#797ACD]"
                  src={assets.user1}
                />
                <div>
                  <div>Rosalyn Davis</div>
                  <div className="text-sm">rosalyn@emial.com</div>
                </div>
              </td>
              <td className="mx-10 py-2 text-base">
                <span className="bg-[#E9C2E4] px-4 py-2 rounded-full">
                  On a break
                </span>
              </td>
              <td className="px-6 py-6 text-xl">UX Product manager</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MembersList;
