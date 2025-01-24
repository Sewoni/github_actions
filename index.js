async function makeIssue() {
    const token=process.env.GITHUB_TOKEN;
    const OWNER="Sewoni"; //github 계정 이름
    const REPO="github_actions"; //현재 리포 이름 
    const response=await fetch(`https://api.github.com/repos/${OWNER}/${REPO}/issues`,{
    method:`POST`,
    headers: {
        Authorization:`Bearer ${token}`,

    },
    body:JSON.stringify({
        title:"행운의 숫자",
        body: `${Math.floor(Math.random()*100)+1}`,
    })
});
if(response.ok) {
    console.log("성공");
} else {
    console.log("실패");
}
    
}
makeIssue();