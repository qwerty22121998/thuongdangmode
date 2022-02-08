const CMT_DEEP = 19


const purgeComment = () => {
  const commentSections = document.querySelectorAll(".cwj9ozl2.tvmbv18p")
  commentSections.forEach(commentSection => {
    const lowRankCmts = commentSection.querySelectorAll(".soycq5t1:not(.low-rank)")
    lowRankCmts.forEach(e => {
      e.classList.add("low-rank")
      cmtRoot(e).style.display = "none"
    })
  })
}

const purgePost = () => {
  const posts = document.querySelectorAll('.du4w35lb.k4urcfbm.l9j0dhe7.sjgh65i0:not(.checked)')
  posts.forEach(post => {
    post.classList.add('checked')
    const head = post.querySelector(".ll8tlv6m.j83agx80.btwxx1t3.n851cfcs.hv4rvrfc.dati1w0a.pybr56ya")
    const isLowRank = head.querySelector('.soycq5t1') != null
    if (!isLowRank) return
    post.style.display = 'none'
  })

}


const cmtRoot = elem => {
  let root = elem
  while (root.tagName != 'LI') root = root.parentElement
  return root
}


const groupName = () => {
  const title = document.querySelector('.oajrlxb2.g5ia77u1.qu0x051f.esr5mh6w.e9989ue4.r7d6kgcz.rq0escxv.nhd2j8a9.nc684nl6.p7hjln8o.kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.jb3vyjys.rz4wbd8a.qt6c0cv9.a8nywdso.i1ao9s8h.esuyzwwr.f1sip0of.lzcic4wl.gmql0nx0.gpro0wi8.hnhda86s')
  if (!title) return null
  return title.innerHTML
}

const purge = () => {
  if (groupName() == 'ShitPost2Vn') {
    purgeComment()
    purgePost()
  } else {
    purgeNormal()
  }
}

const purgeNormal = () => {
  // TO BE IMPLEMENT
}


setInterval(purge, 1000);