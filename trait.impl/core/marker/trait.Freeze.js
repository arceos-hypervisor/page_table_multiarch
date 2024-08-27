(function() {
    var implementors = Object.fromEntries([["page_table_entry",[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Freeze.html\" title=\"trait core::marker::Freeze\">Freeze</a> for <a class=\"enum\" href=\"page_table_entry/aarch64/enum.MemAttr.html\" title=\"enum page_table_entry::aarch64::MemAttr\">MemAttr</a>",1,["page_table_entry::arch::aarch64::MemAttr"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Freeze.html\" title=\"trait core::marker::Freeze\">Freeze</a> for <a class=\"struct\" href=\"page_table_entry/aarch64/struct.A64PTE.html\" title=\"struct page_table_entry::aarch64::A64PTE\">A64PTE</a>",1,["page_table_entry::arch::aarch64::A64PTE"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Freeze.html\" title=\"trait core::marker::Freeze\">Freeze</a> for <a class=\"struct\" href=\"page_table_entry/aarch64/struct.DescriptorAttr.html\" title=\"struct page_table_entry::aarch64::DescriptorAttr\">DescriptorAttr</a>",1,["page_table_entry::arch::aarch64::DescriptorAttr"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Freeze.html\" title=\"trait core::marker::Freeze\">Freeze</a> for <a class=\"struct\" href=\"page_table_entry/riscv/struct.PTEFlags.html\" title=\"struct page_table_entry::riscv::PTEFlags\">PTEFlags</a>",1,["page_table_entry::arch::riscv::PTEFlags"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Freeze.html\" title=\"trait core::marker::Freeze\">Freeze</a> for <a class=\"struct\" href=\"page_table_entry/riscv/struct.Rv64PTE.html\" title=\"struct page_table_entry::riscv::Rv64PTE\">Rv64PTE</a>",1,["page_table_entry::arch::riscv::Rv64PTE"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Freeze.html\" title=\"trait core::marker::Freeze\">Freeze</a> for <a class=\"struct\" href=\"page_table_entry/struct.MappingFlags.html\" title=\"struct page_table_entry::MappingFlags\">MappingFlags</a>",1,["page_table_entry::MappingFlags"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Freeze.html\" title=\"trait core::marker::Freeze\">Freeze</a> for <a class=\"struct\" href=\"page_table_entry/x86_64/struct.X64PTE.html\" title=\"struct page_table_entry::x86_64::X64PTE\">X64PTE</a>",1,["page_table_entry::arch::x86_64::X64PTE"]]]],["page_table_multiarch",[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Freeze.html\" title=\"trait core::marker::Freeze\">Freeze</a> for <a class=\"enum\" href=\"page_table_multiarch/enum.PageSize.html\" title=\"enum page_table_multiarch::PageSize\">PageSize</a>",1,["page_table_multiarch::PageSize"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Freeze.html\" title=\"trait core::marker::Freeze\">Freeze</a> for <a class=\"enum\" href=\"page_table_multiarch/enum.PagingError.html\" title=\"enum page_table_multiarch::PagingError\">PagingError</a>",1,["page_table_multiarch::PagingError"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Freeze.html\" title=\"trait core::marker::Freeze\">Freeze</a> for <a class=\"struct\" href=\"page_table_multiarch/aarch64/struct.A64PagingMetaData.html\" title=\"struct page_table_multiarch::aarch64::A64PagingMetaData\">A64PagingMetaData</a>",1,["page_table_multiarch::arch::aarch64::A64PagingMetaData"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Freeze.html\" title=\"trait core::marker::Freeze\">Freeze</a> for <a class=\"struct\" href=\"page_table_multiarch/riscv/struct.Sv39MetaData.html\" title=\"struct page_table_multiarch::riscv::Sv39MetaData\">Sv39MetaData</a>",1,["page_table_multiarch::arch::riscv::Sv39MetaData"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Freeze.html\" title=\"trait core::marker::Freeze\">Freeze</a> for <a class=\"struct\" href=\"page_table_multiarch/riscv/struct.Sv48MetaData.html\" title=\"struct page_table_multiarch::riscv::Sv48MetaData\">Sv48MetaData</a>",1,["page_table_multiarch::arch::riscv::Sv48MetaData"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Freeze.html\" title=\"trait core::marker::Freeze\">Freeze</a> for <a class=\"struct\" href=\"page_table_multiarch/x86_64/struct.X64PagingMetaData.html\" title=\"struct page_table_multiarch::x86_64::X64PagingMetaData\">X64PagingMetaData</a>",1,["page_table_multiarch::arch::x86_64::X64PagingMetaData"]],["impl&lt;M&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Freeze.html\" title=\"trait core::marker::Freeze\">Freeze</a> for <a class=\"struct\" href=\"page_table_multiarch/struct.TlbFlush.html\" title=\"struct page_table_multiarch::TlbFlush\">TlbFlush</a>&lt;M&gt;<div class=\"where\">where\n    &lt;M as <a class=\"trait\" href=\"page_table_multiarch/trait.PagingMetaData.html\" title=\"trait page_table_multiarch::PagingMetaData\">PagingMetaData</a>&gt;::<a class=\"associatedtype\" href=\"page_table_multiarch/trait.PagingMetaData.html#associatedtype.VirtAddr\" title=\"type page_table_multiarch::PagingMetaData::VirtAddr\">VirtAddr</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Freeze.html\" title=\"trait core::marker::Freeze\">Freeze</a>,</div>",1,["page_table_multiarch::TlbFlush"]],["impl&lt;M&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Freeze.html\" title=\"trait core::marker::Freeze\">Freeze</a> for <a class=\"struct\" href=\"page_table_multiarch/struct.TlbFlushAll.html\" title=\"struct page_table_multiarch::TlbFlushAll\">TlbFlushAll</a>&lt;M&gt;",1,["page_table_multiarch::TlbFlushAll"]],["impl&lt;M, PTE, H&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Freeze.html\" title=\"trait core::marker::Freeze\">Freeze</a> for <a class=\"struct\" href=\"page_table_multiarch/struct.PageTable64.html\" title=\"struct page_table_multiarch::PageTable64\">PageTable64</a>&lt;M, PTE, H&gt;",1,["page_table_multiarch::bits64::PageTable64"]]]]]);
    if (window.register_implementors) {
        window.register_implementors(implementors);
    } else {
        window.pending_implementors = implementors;
    }
})()
//{"start":57,"fragment_lengths":[2379,3767]}